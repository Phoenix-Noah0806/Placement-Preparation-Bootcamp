import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import GoogleStrategy from 'passport-google-oauth20';
import { access } from 'node:fs';

const app=express();

app.use(session({
    secret:"secret",
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://localhost:3000/auth/google/callback"
},(accessToken,refreshToken,profile,done)=>{
    return done(null,profile)
}))

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})

app.get('/',(req ,res)=>{
    res.send("<a href='/auth/google'>Login with Google</a>")
})

app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))

app.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/profile')
})

app.get('/profile',(req ,res)=>{
    res.send(`Welcome ${req.user.displayName} `)
})
app.get('/logout',(req ,res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err)
        }
    })
    res.redirect('/')
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
import './App.css';

import axios from 'axios';
import React, {useState} from 'react'
import firebase from './firebase'
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import "firebase/database";

async function SearchReviews({currentReviewURL}) {
    if(currentReviewURL != ''){
        try{
            return (
                <div>
                  <a href={currentReviewURL}>Suggested NYTimes Article</a>
                </div>
              )
        } catch{

        }
        
    }

    return (
        <div>
          <p>No Article Retrived</p>
        </div>
      )
}


export default SearchReviews;
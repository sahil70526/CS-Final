import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
// import { BrowserRouter  as Router,Route } from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
// import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
// import towerOfHanoi from "./towerOfHanoiComponents/util/towerApp";
import Queen from "./queenComponents/queen";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";


    function App(){
        return (
            // <BrowserRouter>
            <Router>
                <Routes>
                <Route path='/pathfinder' element={<Pathfinder/>}/>
                    {/* <Route path='/prime' component={Seive}/> */}
                    <Route path='/sort' element={<Sort/>}/>
                    <Route path='/nqueen' element={<Queen/>}/>
                    <Route path='/convexhull' element={<ConvexHull/>}/>
                    <Route path='/binarysearch' element={<BinarySearch/>}/>
                    <Route path='/recursivesort' element={<RecursiveSort/>}/>  
                    {/* <Route path='/towerOfHanoi' element={<towerOfHanoi/>}/> */}
                    <Route path='/' element={<Home/>}/>
                </Routes>
              
               
                
                   
                
            </Router>
            // {/* </BrowserRouter> */}
        );
    }


export default App;

import { useEffect } from "react";
import { useState } from "react"
import { getParams, updateQueryString } from "../utils";
import mdPath1 from '../MarkDown/lesson1.md';
import mdPath2 from '../MarkDown/lesson2.md';
import mdPath3 from '../MarkDown/lesson3.md';
import mdPath4 from '../MarkDown/lesson4.md';
import mdPath5 from '../MarkDown/lesson5.md';

const LESSONS = {
  'LESSON1': mdPath1,
  'LESSON2': mdPath2,
  'LESSON3': mdPath3,
  'LESSON4': mdPath4,
  'LESSON5': mdPath5,
}

export const useMardown = () => {
  const [currentMD, setCurrentMD] = useState({})

  const changeMD = (key) => {
    fetch(LESSONS[key])
      .then((res) => res.text())
      .then((text) => setCurrentMD({
        key: key,
        md: text
      }));
    updateQueryString(key)
    
  }

  useEffect(() => {
    const params = getParams();
    if(params.lesson){
      changeMD(params.lesson)
    }else{
      changeMD('LESSON1')
    }
  }, [])

  return {currentMD, changeMD}
}
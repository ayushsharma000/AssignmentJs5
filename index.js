// 1.Count Characters

const countCharacters = (S) => 
{
    var B = [2];
  let countA = 0;
  let countD = 0;
  let i;
  for (i = 0; i < S.length; i++) {
    if (S[i] === "A") {
      countA += 1;
    } else if (S[i] === "D") {
      countD += 1;
    }
  }
  B[0] = countA;
  B[1] = countD;
  return B;
};
 
// 2.Count the Heads

var Count_Occ = (s) => 
{
     let len = s.length, S = "";
    const str = [s.charAt(0)], frequency = [1];
    let res = [];
    for(let i = 1; i < len; i++) {
      if(!str.includes(s.charAt(i))) {
        str.push(s.charAt(i));
        frequency.push(1)
      }
      else {
        frequency[str.indexOf(s.charAt(i))]++;
      }
    }
    
    for(let j =  str.length-1; j >= 0; j--) {
      if(frequency[j] >= 2) {
        res.push(str[j] + frequency[j]);
      }
    }
    res.sort();
    for(let k = 0; k < res.length; k++) {
      S += res[k];
    }
    return S;
};

// 3.Count the Vowels

var Count_Vowels= (S) => 
{
        let count = 0;
  
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) == "a" || S.charAt(i) == "A" || S.charAt(i) == "e" || S.charAt(i) == "E" || 
    S.charAt(i) == "i" || S.charAt(i) == "I" || S.charAt(i) == "o" || S.charAt(i) == "O" ||
    S.charAt(i) == "u" || S.charAt(i) == "U") {
      count++;
    }
  }
  return count;
  
};
 
// 4.Concatenate the Strings

var Concatenate_Strings = (S1, S2) => 
{
     var str=''
      str=S1+S2
      return str
};
 
// 5.Find Length


const findLength = (S) => 
{
     let count = 0;
    
    while(S.charAt(count) !== '') {
      count++;
    }
    
    return count;
};

// 6.Find the Winner

var Game_Winner = (S) => 
{
        let CountA=0,CountD=0
  for(let i=0;i<S.length;i++){
    if(S.charAt(i)=='A'){
      CountA+=1
    }
    if(S.charAt(i)=='D'){
      CountD+=1
    }
  }
  if(CountA > CountD){
    return 'Aditya'
  }
  else if(CountA<CountD){
    return 'Danish'
  }
  else{
    return 'Draw'
  }
}
 
// 7.Join Strings

const joinStrings = (S, P) => 
{
    return S.concat(P);
};
 
// 8.Plaindrome Check

var Palin_Check = (str) =>
{
	  let len = parseInt((str.length-1)/2), size = str.length-1;
	 for(let i = 0; i <= len; i++) {
	   if(str.charAt(i) != str.charAt(size - i)) {
	     return "False";
	   }
	 }
	 
	 return "True";
}

// 9.Reverse the String

var Reverse_String = (str) => 
{
     let str2 = "";
     for(let i = str.length-1; i >= 0; i--) {
       str2 += str.charAt(i);
     }
     
     return str2; 
};

// 10.Match the String

var String_Match = (S1,S2) => 
{
        
  if(S1 === S2) {
    return "YES";
  }
  
  return "NO"
};
 

// 11.String Replace

var Replace = (S, pattern , text) => 
{
         
      let str1 = S.replace(pattern, text);
      
      return str1;
      
};

// 12.Split the String

var Split_the_string = (S) => 
{
   return S.split(" ");
        
};
 
// 13. Count the Vowels and Consonants

var Count_Vowels= (S) => 
{
         let count = 0;
  
  for(let i = 0; i < S.length; i++){
    if(S.charAt(i) == "a" || S.charAt(i) == "A" || S.charAt(i) == "e" || S.charAt(i) == "E" || 
    S.charAt(i) == "i" || S.charAt(i) == "I" || S.charAt(i) == "o" || S.charAt(i) == "O" ||
    S.charAt(i) == "u" || S.charAt(i) == "U") {
      count++;
    }
  }
  return count;
};
var Count_Consonants= (S) => 
{
        return S.length - Count_Vowels(S);
};
 
 

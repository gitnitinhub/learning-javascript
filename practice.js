//find duplicate elements in array in javascript 

let arr= [1,2,3,3,4,5,6,7,7]
let duplicates=[]

function findduplicates(arr){
for (let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if (arr[i]=== arr[j] && !duplicates.includes(arr[i])){
            duplicates.push(arr[i])
        }
    }

}
console.log('Duplicates element in the array are: '+ duplicates)
}

findduplicates(arr)

//how to find max and min value in a given array in js ?

let marr = [3,5,6,1,4,8,9,10,12]

let max = marr[0]
let min = marr[0]

for(let i=1; i<marr.length; i++){
    if (min > marr[i]){
        min = marr[i]
    }
    if (max < marr[i]){
        max = marr[i]
    }

} console.log(min,max)


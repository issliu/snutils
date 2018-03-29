// 最简单的冒泡排序，原理是每一次循环，找到从第 j 个元素到 n-1 中最小的那个，与第 i 个元素交换位置

function bubbleSort(array, n) {
    for(let i=0;i<n;i++) {
        let smallest = i;
        for(let j=i+1;j<n;j++) {
            if(array[smallest]>array[j]) smallest = j;
        }
        let temp = array[i];
        array[i] = array[smallest];
        array[smallest] = temp;
    }
}

let a = [1,6,2,4,8,5];
bubbleSort(a, 6);
console.log(a);


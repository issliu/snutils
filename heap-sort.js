/*
* 堆排序的步骤分为 2 步
* step 1 构造一个最小堆，这个堆包含了所有待排序元素
* step 2 排序，进行一次长度为 n 的遍历，每次遍历把第一个节点跟最后一个节待排序节点交换，再将前面 n-1 个节点重新调整为新的最小堆
*
* 构造最小堆的过程，是每次往堆里添加一个新元素，然后从下往上调整
* 排序的过程，是每次把第一个节点从上往下调整
*
* */

// 向 arr[i] 添加新元素 number，然后重新调整为新的最小堆
function minHeapFixUp(arr, i, number) {
    arr[i] = number; // 添加元素
    // 因为最小堆的特性，父节点的值一定小于子节点，因此需要调整的路径是从根节点到新添加的元素之间的路径，直到新添加的节点比它的左右子节点都小，比它的父节点大

    // 位置 i 的节点，父节点的索引应为 (i-1)/2
    for(let m=(i-1)/2;m>=0 && arr[m]>arr[i]; i=m,m=(i-1)/2) {
        let tmp = arr[m];
        arr[m] = arr[i];
        arr[i] = tmp;
    }
}

// 将 arr 前 n 个元素重新调整为最小堆，需要调整的路径为节点 a[i] 经过其每一层的最小子节点直到最小叶子结点的路径
function minHeapFixDown(arr, i, n) {
    let temp = arr[i];
    let j = 2*i+1;
    if(j>n) return;
    while(j<n) {
        if(arr[j]>temp) break;
        if(j+1<n && arr[j]>arr[j+1]) j = j+1;
        arr[i] = arr[j];
        i = j;
        j = 2*i + 1;
    }
    arr[i] = temp;

}

function createHeap(arr, n) {
    let tmp = [];
    for(let i=0;i<n;i++) {
        tmp[i] = arr[i];
        minHeapFixUp(tmp, i, arr[i]);
    }
    return tmp;
}

let arr = [5,2,35,10,20,7,26];
let arr2 = createHeap(arr, 7);
console.log('构造出来的堆为:', arr2);

function minHeapSort(arr, n) {
    for(let i=n-1;i>=1;i--) {
        let tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        minHeapFixDown(arr, 0 , i);
        console.log(arr);
    }
    console.log(arr);
}

minHeapSort(arr2, 7);
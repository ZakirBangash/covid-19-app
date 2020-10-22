export const sortedData = (data) => {
    console.log(data);
    let sortData = [...data];
    sortData.sort((a,b)=>{
        if (a.cases > b.cases) {
            return -1;
          } else {
            return 1;
          }
    })
    return sortData;
    
}
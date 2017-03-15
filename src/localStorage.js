
export const loadState = () => {
    console.log('Retrieving App State from localStorage...')
    try{
      const serializedState = localStorage.getItem('state')
      if(serializedState === null){
        return undefined
      }
      return JSON.parse(serializedState)
    }
    catch(err){
      return undefined
    }
};


export const saveState = (state) => {
  console.log('Updating App State on localStorage...')
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setIem('state', serializedState)
  }
  catch(err){
    console.err('Could not save app data to local storage...')
  }

};

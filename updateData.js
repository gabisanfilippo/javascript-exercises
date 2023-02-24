function updateData(currentObject, newDataObject) {
  let newData = currentObject
  let keysArrayCurrentObj = Object.keys(currentObject);
  keysArrayCurrentObj.forEach((key) => {
    if (newDataObject[key]) {
      newData = { ...newData, [key]: newDataObject[key] };
    }
  })
  return newData
}

module.exports = updateData;
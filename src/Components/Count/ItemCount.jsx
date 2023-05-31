import React, { useState } from 'react'

const ItemCount = ({onAdd, onRemove, onSave, count, finish}) => {

return (
<>
      <div>
        <b className='productDetailCount' >{count}</b>
        <button className='productDetailAddBtn' onClick={onAdd}>add</button>
        <button className='productDetailRemoveBtn' onClick={onRemove}>remove</button>
        <button className='productDetailSaveBtn' onClick={onSave}>save</button>
      </div>
  </>
  )
}

export default ItemCount
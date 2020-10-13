import React from 'react'

export default function SwipeItem(props) {

    const handleDelete = () => {
        let data = props.mapData
        data.splice(props.index, 1)
        props.setMapData([...data])
      }

    return (
        <li>
            <div class="swipe-container">
                    <div class="swipe-item">
                        <button type="button">
                            <i class="fas fa-times"></i>
                        </button>
                        <span>{props.title}</span>
                        <button type="button">
                            <i class="fas fa-check"></i>
                        </button>
                    </div>
                    <div class="reveal-right" onClick={handleDelete}>
                        <i class="fas fa-check"></i>
                    </div>
                </div>
        </li>
    )
}

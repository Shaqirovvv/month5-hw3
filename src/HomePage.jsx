import React, { useState, useEffect } from 'react'

const HomePage = () => {
	const [inputValue, setInputValue] = useState('')
	const [items, setItems] = useState([])


	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items))
	}, [items])

	const handleInputChange = event => {
		setInputValue(event.target.value)
	}

	const handleAddClick = () => {
		if (inputValue.trim() !== '') {
			setItems([...items, inputValue])
			setInputValue('')
		}
	}

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button onClick={handleAddClick}>add</button>
			<ul>
				{items.map((item) => (
					<h2>{item}</h2>
				))}
			</ul>
		</div>
	)
}

export default HomePage

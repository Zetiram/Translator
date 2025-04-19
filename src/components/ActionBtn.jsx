function ActionBtn({img, alt, index, onClick}) {
	return(
		<>
			<button onClick={onClick} tabIndex={index}>
					<img src={img} alt=""/>
			</button>
		</>	
	)
}

export default ActionBtn
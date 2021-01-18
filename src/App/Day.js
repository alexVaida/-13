import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Day = ({ day, list }) => {
	return (
		<>
			<div>
				<div><strong>{format(new Date(day), 'eeee, dd LLLL')}</strong></div>

				{list.map((item) => {
					return (
						<>
							<div key={item?.dt} style={{ fontSize: "12px" }}>{item?.dt_txt}</div>

							<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
								<div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
									<img src={`icons/${item?.weather[0].icon}.png`} width="50" height="50" />
									{item?.weather[0].main} - {item?.weather[0].description}
								</div>
								<div style={{ fontSize: "16px", color: "darkgray" }}> {item?.main.temp}<sup>0</sup>C</div>
								<div style={{ fontSize: "12px" }}> {item?.main.temp_max}/{item?.main.temp_min}</div>
								<div style={{ fontSize: "13px" }}>Feels like: {item?.main.feels_like} </div>
								<div style={{ fontSize: "13px" }}>Wind speed: {item?.wind.speed} </div>
							</div>
							<br />
						</>
					)
				})}
			</div>
			<hr />
		</>
	)
}

Day.propTypes = {
	day: PropTypes.string,
	list: PropTypes.array,
}

export default Day

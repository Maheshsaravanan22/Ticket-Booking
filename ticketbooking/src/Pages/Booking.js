import '../Css/Booking.css';
import React, { useState } from 'react'
import clsx from 'clsx';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const movies = [
  {
    name: 'Avengers Endgame',
    price: 200,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Toy Story 4',
    price: 150,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Joker',
    price: 200,
    occupied: [37, 25, 44, 13, 2, 3],
  },
]

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

export default function Booking() {

  const [selectedMovie, setSelectedMovie] = useState(movies[0])
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleBookSeats = () => {
    setSelectedSeats({...selectedSeats,color:'black'});
   console.log(selectedSeats);
  };
  
  return (
    <Box className="App">
      <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>
      <Box className="btn-sec-book">
         <Button  type="submit"  variant="contained" onClick={handleBookSeats}
          className="btn btn-success-book login-btn">Book</Button>
      </Box>
    </Box>
  )
}

function Movies({ movie, onChange }) {
  return (
    <Box className="Movies">
      <label htmlFor="movie">SELECT A MOVIE</label>
      <select
        id="movie"
        value={movie.name}
        onChange={e => {
          onChange(movies.find(movie => movie.name === e.target.value))
        }}
      >
        {movies.map(movie => (
          <option key={movie.name} value={movie.name}>
            {movie.name} ({movie.price})
          </option>
        ))}
      </select>
    </Box>
  )
}

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
       
      )
    } 
    else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <Box className="Cinema">
      <Box className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
          )
        })}
      </Box>
    </Box>
  )
}
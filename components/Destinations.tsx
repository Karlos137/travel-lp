// React components
import DestinationCard from "./DestinationCard"

// Data
import { destinations } from "../data"

const Destinations = () => {
  return (
    <div className="px-5 mx-auto max-w-7xl">
      <h2 className="mb-8 text-5xl font-semibold text-center">
        Choose your <span className="text-orange-600">destination</span>
      </h2>
      <ul className="flex flex-col justify-center gap-8 lg:flex-row">
        {destinations.map(destination => {
          return (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              description={destination.description}
              imageUrl={destination.imageUrl}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Destinations

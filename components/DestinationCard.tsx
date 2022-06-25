// Next
import Image from "next/image"

type DestinationCardProps = {
  name: string
  description: string
  imageUrl: string
}
const DestinationCard = ({
  name,
  description,
  imageUrl,
}: DestinationCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-lg p-2 mx-auto mb-10 bg-white lg:mx-0 lg:max-w-xs rounded-xl">
      <div className="relative h-64 mb-2 rounded-xl">
        <Image
          className="rounded-xl"
          src={imageUrl}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col p-2 grow">
        <div className="mb-8">
          <h3 className="mb-3 text-3xl font-semibold text-slate-700">{name}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
        <button className="block max-w-[100px] px-4 py-1 mt-auto text-lg font-semibold text-orange-500 bg-white border border-orange-500 rounded-lg shadow-sm hover:text-white hover:bg-orange-500">
          Book
        </button>
      </div>
    </div>
  )
}

export default DestinationCard

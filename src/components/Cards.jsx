export const Cards = ({ img, titulo }) => {
    return (
      <div className="">
        <img className="h-38 w-36 shadow-sm rounded-xl p-4 hover:shadow-lg " src={img} alt={titulo} /> 

      </div>
    );
  };
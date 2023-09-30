export const Cards = ({ img, titulo }) => {
    return (
      <div className="">
        <img className="h-38 w-36 shadow-sm rounded- p-6 hover:shadow-lg " src={img} alt={titulo} />

      </div>
    );
  };
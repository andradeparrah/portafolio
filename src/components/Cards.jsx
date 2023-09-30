export const Cards = ({ img, titulo }) => {
    return (
      <div>
        <img className= "h-38 w-36 shadow-sm p-6 rounded-lg hover:shadow-lg" src={img} alt={titulo} />

      </div>
    );
  };
const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/5 transition-all">
      <div className="text-center ">
        <img src="/pizza.png" className="max-h-auto max-h-24 max-w-auto block mx-auto" alt="Pizza"/>
      </div>
      <h3 className="text-gray.500font-bold text-2xl my-3">Pepperoni Pizza</h3>
      <p>lorem ipsum dolor sit amet, lorem impum dolor sit amet</p>

      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;

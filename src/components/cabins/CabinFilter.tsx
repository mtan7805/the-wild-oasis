function CabinFilter() {
  return (
    <div className="border boder-primary-800 flex flex-wrap">
      <button className={`py-2 px-5 hover:bg-primary-700 cursor-pointer`}>
        All Cabins
      </button>
      <button className={`py-2 px-5 hover:bg-primary-700 cursor-pointer`}>
        3-4 guests
      </button>
      <button className={`py-2 px-5 hover:bg-primary-700 cursor-pointer`}>
        5-7 guests
      </button>
      <button className={`py-2 px-5 hover:bg-primary-700 cursor-pointer`}>
        8-12 guests
      </button>
    </div>
  );
}

export default CabinFilter;

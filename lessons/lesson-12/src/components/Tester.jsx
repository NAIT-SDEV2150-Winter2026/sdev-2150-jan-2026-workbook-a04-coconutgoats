import { useState} from 'react';

export default function Tester(){
  const [searchTerm, setSearchterm] = useState("");
  return(
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
        className="input input-bordered w-full"
        placeholder="Search resources..."
      />
      <p className="alert alert-info mt-4">
        {searchTerm}
      </p>
    </>
  );
}









// export default function Tester(){
//   const [isOn, setIsOn] = useState(true);

//   return(
//     <button class="bg-gray-500 text-neutral-100" onClick={() => setIsOn(!isOn)}>
//       {isOn? "ON" : "OFF"}
//     </button>
//   );
// }
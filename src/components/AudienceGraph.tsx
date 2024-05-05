import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

interface AudienceGraphProps {
  data: DataItem[];
}
 const AudienceGraph = ({data}: AudienceGraphProps) => {
  
  return (
  <ResponsiveContainer width="20%" height="40%" className="bg-black bg-opacity-70 border border-4 rounded-lg border-sky-400 pt-4 px-auto flex justify-center items-center">
    <BarChart
    width={30}
    height={50}
    data={data}
    margin={
      {top: 5, right: 50, left: 10, bottom: 5}
    }
    
    >
      <XAxis dataKey="name" stroke="#FFFFFF"className="text-white font-bold text-2xl" />
      <YAxis stroke="#FFFFFF"/>
      <Bar dataKey="value" fill="#f59e0b" barSize={30}/>
    </BarChart>
  </ResponsiveContainer>
);
};

export default AudienceGraph



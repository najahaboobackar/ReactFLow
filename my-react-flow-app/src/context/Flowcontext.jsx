import { createContext,useContext,useCallback } from "react";
import { useNodesState,useEdgesState,addEdge } from "reactflow";
const Flowcontext=createContext({});
export function useFlowContext(){
    return useContext(Flowcontext);

}
const initialNodes = [
    { id: '3', position: { x: 200, y: 200 },type:'Position', data:{id:'3',label:'2'} },
    { id: '4', position: { x: 500, y: 200 },type:'Scale', data:{id:'5',label:'2'} },
    {id:'5',position:{x:700,y:200},type:'Rotation',data:{id:'4',label:'2'}},
    {id:'8',position:{x:500,y:50},type:'Output',data:{id:'5',label:'2'}},
        
  ];
  const initialEdges=[];





export function  FLowProvider({children}){
    const [nodes,setNodes,onNodesChange]=useNodesState(initialNodes);
    const [edges,setEdges,onEdgesChange]=useEdgesState(initialEdges);
    const onConnect=useCallback((params)=>setEdges((eds)=>addEdge(params,eds)),[setEdges]);
    const values={
        nodes,edges,onNodesChange,onEdgesChange,onConnect
    }
    return(<Flowcontext.Provider value={values}>{children}
    </Flowcontext.Provider>)

};
import { createContext,useContext,useCallback } from "react";
import { useNodesState,useEdgesState,addEdge } from "reactflow";
const Flowcontext=createContext({});
export function useFlowContext(){
    return useContext(Flowcontext);

}
const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];





export function  FLowProvider({children}){
    return(<Flowcontext.Provider value={values}>{children}
    </Flowcontext.Provider>)

};
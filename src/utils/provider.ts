import { StaticJsonRpcProvider } from "@ethersproject/providers";

export const simpleRpcProvider = new StaticJsonRpcProvider(process.env.REACT_APP_RPCURL);

export default null;

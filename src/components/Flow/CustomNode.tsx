import { memo, FC, CSSProperties } from "react";
import { Handle, Position, NodeProps, NodeResizer } from "reactflow";
import Image from "next/image";

import styles from "@/styles/Custom.module.scss";

const CustomNode: FC<NodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      {/* <NodeResizer /> */}
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <Handle type="target" position={Position.Top} id="top" />
      <div className="w-48 flex-col bg-gray-100 py-2.5 px-5 break-words whitespace-pre-wrap rounded-md">
        {data?.thumbnailPath && (
          <div className="relative h-24 mb-2.5">
            <Image
              className="w-full h-full"
              src={data?.thumbnailPath}
              fill={true}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={true}
              style={{ objectFit: "contain" }}
              alt="thumbnail"
            />
          </div>
        )}
        <div className="text-sm mb-1 text-gray-800">{data?.title}</div>
        <div className="text-sm mb-1 text-gray-800">Level: {data?.level}</div>
        {data?.url && data?.thumbnailPath && (
          <a className="text-sm text-blue-500" href={data?.url} target="_blank">
            {data?.url}
          </a>
        )}
      </div>
    </>
  );
};

export default memo(CustomNode);

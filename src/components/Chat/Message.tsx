type MessageProps = {
  name: string;
  body: string;
  avator?: string;
  isMe: boolean;
  isSeen?: boolean;
};

export default function Message(props: MessageProps): JSX.Element {
  const wrapperClass1 = props.isMe
    ? "p-3 rounded-lg col-start-6 col-end-13"
    : "p-3 rounded-lg col-start-1 col-end-8";
  const wrapperClass2 = props.isMe
    ? "flex flex-row-reverse items-center justify-start"
    : "flex flex-row items-center";

  const messageClass = props.isMe
    ? "relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl"
    : "relative px-4 py-2 ml-3 text-sm whitespace-pre-wrap bg-white shadow rounded-xl";

  return (
    <div className={wrapperClass1}>
      <div className={wrapperClass2}>
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
          {props.name[0]}
        </div>
        <div className={messageClass}>
          <div>{props.body}</div>
          {props.isMe && props.isSeen ? (
            <div className="absolute bottom-0 right-0 mr-2 -mb-5 text-xs text-gray-500">
              Seen
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

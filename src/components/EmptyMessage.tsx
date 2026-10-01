type EmptyMessageProps = {
    message: string;
};

const EmptyMessage = ({ message }: EmptyMessageProps) => {
    return <p className="emptyMessage">{message}</p>;
};

export default EmptyMessage;

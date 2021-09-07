export const Wrapper = ({children, wrapperClass}) => {
    return (
        <div className={ wrapperClass }>
            { children }
        </div>
    );
}
import React, { useContext } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { MyContext } from '../../../Context/MyContext';
import ButtonComp from '../Button/Button';

const TopLoadingBar = () => {
    const { progressBar, setProgressBar, startBar } = useContext(MyContext);
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progressBar}
                onLoaderFinished={() => setProgressBar(0)}
            />
            <ButtonComp sx={{ marginRight: "10px" }} onClick={startBar} text={"Add 10%"} />
        </>
    )
}

export default TopLoadingBar
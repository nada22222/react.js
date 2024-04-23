import React from 'react';

const Demo = () => {
    const [currentTab, setCurrentTab] = React.useState(0);

    return (
        <div>
            <div>
                <div>
                    <div>
                        <button
                            className="success"
                            disabled={currentTab === 0}
                            onClick={() => setCurrentTab(prev => prev - 1)}
                        >
                            Prev
                        </button>
                        <button
                            className="success"
                            disabled={currentTab === 2}
                            onClick={() => setCurrentTab(prev => prev + 1)}
                        >
                            Next
                        </button>
                    </div>
                    <p>Current tab index is {currentTab}</p>
                </div>
            </div>
        </div>
    );
};

export default Demo;

import React from 'react';

function Footer() {
    return (
        <>
            <div className="footer bg-[#171717]">
                <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
                    <h1 className="text-3xl">YBN1108</h1>
                    <div className="flex gap-4 cursor-pointer ">
                        <a href="https://www.facebook.com/user.error.14/" target="_blank">
                            <i className="fa-brands fa-facebook border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/t%E1%BA%A5n-d%C5%A9ng-35470b20b/" target="_blank">
                            <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>
                        <a href="https://github.com/TD1402" target="_blank">
                            <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

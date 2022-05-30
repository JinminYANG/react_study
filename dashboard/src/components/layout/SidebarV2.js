import {AnimatePresence, motion} from 'framer-motion';
import {FaBars, FaHome, FaThList} from "react-icons/fa";
import {MdFavorite, MdSettings} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const routes = [
    {
        path: "/",
        name: "Home",
        icon: <FaHome/>
    },
    {
        path: "/mylist",
        name: "List",
        icon: <FaThList/>
    },
    {
        path: "/favorite",
        name: "Favorite",
        icon: <MdFavorite/>
    },
    {
        path: "/setting",
        name: "Setting",
        icon: <MdSettings/>
    }
];


const SidebarV2 = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div className={"main-container"}>
            <motion.div
                animate={{
                    width: isOpen ? "200px" : "40px",
                    transition: {
                        duration: 0.3,
                        type: "spring",
                        damping: 10,
                    }
                }}
                className={"sidebar"}
            >
                <div className={"top_section"}>
                    {isOpen && <motion.h1
                        variants={showAnimation}
                        initial={"hidden"}
                        animate={"show"}
                        exit={"hidden"}
                        className={"logo"}
                    >
                        Dashboard
                    </motion.h1>}
                    <div className={"bars"} >
                        <FaBars onClick={toggle}/>
                    </div>
                </div>

                <section className={"routes"}>
                    {routes.map((route) => (
                        <NavLink
                            className={({ isActive }) => (isActive ? "active" : "not")}
                            // activeclassName={"active"}
                            to={route.path}
                            key={route.name}
                            className={"link"}
                        >
                            <div className={"icon"}>
                                {route.icon}
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial={"hidden"}
                                        animate={"show"}
                                        exit={"hidden"}
                                        className={"link_text"}
                                    >
                                        {route.name}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    )
};

export default SidebarV2;
// import React from 'react'
// import Button from '@mui/material/Button';


// const ButtonComp = ({
//     text,
//     bgColor = "#fff",
//     width = "auto",
//     height = "auto",
//     color = "#f7f7f7",
//     variant,
//     fontSize = "12px",
//     onClick,
//     type,
//     href,
//     sx = {}
// }
// ) => {
//     return (
//         <Button
//             variant={variant}
//             type={type}
//             href={href}
//             onClick={onClick} sx={{ width: width, height: height, fontSize: fontSize, backgroundColor: bgColor, color: color, ...sx }}>
//             {text}
//         </Button>
//     )
// }

// export default ButtonComp



import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ButtonComp = ({
    text,
    bgColor = "#fff",
    width = "auto",
    height = "auto",
    color = "#f7f7f7",
    variant,
    fontSize = "12px",
    onClick,
    type,
    sx = {},
    href,  // Add href as a prop
}) => {
    // Use Link from next/link if href is provided
    if (href) {
        return (
            <Link href={href} passHref>
                <Button
                    variant={variant}
                    type={type}
                    sx={{ width, height, fontSize, backgroundColor: bgColor, color, ...sx }}
                    component="a"  // Set component to "a" to create a link
                >
                    {text}
                </Button>
            </Link>
        );
    }

    // If no href provided, render the Button without Link
    return (
        <Button
            variant={variant}
            type={type}
            onClick={onClick}
            sx={{ width, height, fontSize, backgroundColor: bgColor, color, ...sx }}
        >
            {text}
        </Button>
    );
};

export default ButtonComp;

import React from "react";

function Footer() {
    return (
        <footer
            className="p-2 rounded-top shadow-sm"
            style={{ background: "linear-gradient(90deg, #bfcdd4, #e1e8eb)" }}
        >
            <p className="text-center text-muted" style={{ margin: "5px" }}>
                Сайт создал ст.гр.ИРспк-223 Маринин А.А.
            </p>
        </footer>
    );
}

export default Footer;
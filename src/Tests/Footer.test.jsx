/**
 * @vitest-environment jsdom
 */

import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "../components/Footer/Footer"
import {  quaternary } from "../components/ui/colors";

describe("Footer",()=>{
    test("Link text render and change color in hover",()=>{
        render(<Footer/>)
        expect(screen.getByText("Homepage"))
        userEvent.hover(screen.getByText("Homepage"))
        expect(screen.getByText("Homepage")).toHaveStyle(`color: ${quaternary}` && "text-decoration: none")
    
    })
    test("Link img render correct", ()=>{
        render(<Footer/>)
        const images = screen.getAllByRole("img")
        expect(images === 3)
        expect(screen.getByAltText("Facebook"))
        expect(screen.getByAltText("Instagram"))
        expect(screen.getByAltText("Twitter"))

    })
    test("Render all right reserved",()=>{
        render(<Footer/>)
        expect(screen.getByText("@All rights reserved."))
        expect(screen.getByText("@All rights reserved.")).toHaveStyle("color:rgb(128, 128, 128)")

    })
})
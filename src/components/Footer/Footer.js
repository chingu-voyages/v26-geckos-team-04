import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useWindowWidth from '../../hooks/useWindowWidthState';
import Logo from "../../assets/footer-logo-transparent.png";
import { FooterContents, Countries, AmazonServices } from './FooterContents';

const FooterStyles = styled.div`
    margin-top: 30px;
    width: 100%;
    color: #fff;
    background: #232f3e;
`;
const BackToTop = styled.div`
    background: #37475a;
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 15px 0;
    &:hover {
        background: #47576a;
    }
`;
const ContentsTable = styled.div`
    display: table;
    margin: auto;
    padding: 30px 0;
`;
const ContentsRow = styled.div`
    display: table-row;
`;
const ContentsCell = styled.ul`
    display: table-cell;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-right: 30px;
`;
const SpacerCell = styled.li`
    display: table-cell;
    padding: 0 10px;
    width: 10%;
`;
const ContentTitle = styled.li`
    font-size: 16px;
    font-weight: 600;
    margin: 6px 0 14px;
`;
const ContentLine = styled.li`
    font-size: 14px;
    margin-bottom: 10px;
    a {
        text-decoration: none;
        color: #ddd;
        &:hover {
            text-decoration: underline;
        }
    }
`;
const Divider = styled.div`
    border-top: 1px solid #444;
    margin-top: 40px;
`;
const FooterLogo = styled.div`
    width: 100%;
    text-align: center;
    padding: 15px 0;
    img {
        width: 100px;
        height: auto;
    }
`;
const CountriesStyle = styled.ul`
    list-style: none;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: auto;
`;
const Country = styled.li`
    border-left: solid 1px #ddd;
    padding: 0 7px;
    display: inline-block;
    a {
        text-decoration: none;
        color: #ddd;
        &:hover {
            text-decoration: underline;
        }
    }
    &:first-child {
        border-left: none;
    }
`;
const CopyRight = styled(CountriesStyle)`
    width: 100%;
    background: #131a22;
    padding: 15px 0 30px;
`;
const CopyRightContent = styled.li`
    margin: 0 10px;
    a {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default function Footer() {
    
    return (
        <FooterStyles>
            <BackToTop>Back to top</BackToTop>
            <ContentsTable>
                <ContentsRow>
                    {FooterContents.map((footerContents, i) => (
                        <React.Fragment key={i}>
                            <ContentsCell>
                                <ContentTitle>{footerContents.title}</ContentTitle>
                                {footerContents.contents.map((footercontent, j) => (
                                    <ContentLine key={j}>
                                        <a href={footercontent.url}>{footercontent.content}</a>
                                    </ContentLine>
                                ))}
                            </ContentsCell>
                            {i === FooterContents.length - 1 ? "" : <SpacerCell />}
                        </React.Fragment>
                    ))}
                </ContentsRow>
            </ContentsTable>
            <Divider />
            <FooterLogo>
                <img src={Logo} alt="amazon logo"/>
            </FooterLogo>
            <CountriesStyle>
                {Countries.map((country,i) => (
                    <Country key={i}><a href={country.url}>{country.name}</a></Country>
                ))}
            </CountriesStyle>
            <CountriesStyle>
                <div>And don't forget:</div>
                {AmazonServices.map((service,i) => (
                    <Country key={i} style={{borderLeft: i===0 ? "none" : ""}}><a href={service.url}>{service.name}</a></Country>
                ))}
            </CountriesStyle>
            <CopyRight>
                <CopyRightContent><a href="/">Conditions of Use & Sale</a></CopyRightContent>
                <CopyRightContent><a href="/">Privacy Notice</a></CopyRightContent>
                <CopyRightContent><a href="/">Interest-Based Ads Notice</a></CopyRightContent>
                <CopyRightContent><span>© 1996-2020, Amazon.com, Inc. or its affiliates</span></CopyRightContent>
            </CopyRight>
        </FooterStyles>
    )
}
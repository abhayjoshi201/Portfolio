import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../../data/constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: all 0.3s ease;
  ${({ scrolled }) =>
    scrolled &&
    `
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  `}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
`;

const NavLogo = styled(LinkR)`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;

  span.bracket {
    color: ${({ theme }) => theme.text_tertiary};
    font-weight: 400;
  }
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.primaryGlow};
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 8px ${({ theme }) => theme.primaryGlow}; }
    50% { opacity: 0.5; box-shadow: 0 0 16px ${({ theme }) => theme.primaryGlow}; }
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
  transition: color 0.2s ease;
  letter-spacing: 0.5px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const GithubButton = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 8px 20px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryDim};
    box-shadow: 0 0 20px ${({ theme }) => theme.primaryGlow};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 22px;
  cursor: pointer;
  z-index: 200;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(10, 10, 15, 0.97);
  backdrop-filter: blur(30px);
  z-index: 150;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
`;

const MobileNavLink = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "achievements", href: "#achievements" },
  ];

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <NavLogo to="/">
          <StatusDot />
          <span className="bracket">{"{"}</span>
          AJ
          <span className="bracket">{"}"}</span>
        </NavLogo>

        <NavItems>
          {sections.map((s) => (
            <NavLink key={s.label} href={s.href}>
              {s.label}
            </NavLink>
          ))}
        </NavItems>

        <GithubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
          github →
        </GithubButton>

        <MobileIcon onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <MobileMenu open={open}>
          {sections.map((s) => (
            <MobileNavLink key={s.label} href={s.href} onClick={() => setOpen(false)}>
              {s.label}
            </MobileNavLink>
          ))}
          <MobileNavLink
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            github →
          </MobileNavLink>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
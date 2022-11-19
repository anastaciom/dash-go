import Link, { LinkProps } from "next/link";
import Router from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export default function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { href } = rest;
  const { asPath } = Router;
  const isActive =
    (asPath === href && shouldMatchExactHref) ||
    (!shouldMatchExactHref && asPath.startsWith(String(href)));

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
}

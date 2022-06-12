import { Disclosure, Menu } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  XIcon,
} from "@heroicons/react/outline";
import { FC, Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import tw from "twin.macro";

import Logo from "../shared/Logo";
import { Transition } from "../shared/Transition";

type ToggleThemeButtonProps = {
  theme: string;
  setter: Function;
};

const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({
  theme,
  setter,
  ...props
}) => {
  return (
    <button
      type="button"
      tw="transition p-1 rounded-full text-slate-400 hover:text-white focus:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-white)"
      onClick={() => setter()}
      {...props}
    >
      <span tw="sr-only">Toggle dark theme</span>
      {theme === "light" ? (
        <MoonIcon tw="h-6 w-6" aria-hidden="true" />
      ) : (
        <SunIcon tw="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export const Layout: FC = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Test", href: "/test" },
  ];

  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  return (
    <div
      tw="transition h-full flex flex-col overflow-y-auto bg-base-100 text-base-900"
      css={theme === "dark" ? tw`dark` : null}
    >
      {/* Navbar */}
      <Disclosure as="nav" tw="transition bg-slate-800 font-montserrat">
        {({ open }) => (
          <Fragment>
            <div tw="container mx-auto px-4 sm:px-6 lg:px-8">
              <div tw="flex items-center justify-between h-16">
                <div tw="flex items-center">
                  <div tw="flex-shrink-0">
                    <Logo tw="relative -bottom-1 h-8 w-8 animate-bounce animation-duration[5s]" />
                  </div>

                  <div tw="hidden md:flex ml-10 items-baseline space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        tw="transition px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:(bg-slate-700 text-white)"
                        // aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div tw="hidden md:block">
                  <div tw="ml-4 flex items-center gap-3 md:ml-6">
                    <ToggleThemeButton theme={theme} setter={toggleTheme} />
                    {/*
                    <button
                      type="button"
                      tw="transition p-1 rounded-full text-slate-400 hover:text-white focus:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-white)"
                    >
                      <span tw="sr-only">View notifications</span>
                      <BellIcon tw="h-6 w-6" aria-hidden="true" />
                    </button> */}

                    {/* Profile dropdown */}
                    <Menu as="div" tw="relative">
                      <div>
                        {/* <typeof Fragment> is a dirty fix to avoid ts(2590) */}
                        <Menu.Button<
                          typeof Fragment
                        > tw="transition max-w-xs bg-slate-800 rounded-full flex items-center text-sm focus:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-white)">
                          <span tw="sr-only">Open user menu</span>
                          <img
                            tw="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter={tw`transition ease-out duration-100`}
                        enterFrom={tw`transform opacity-0 scale-95`}
                        enterTo={tw`transform opacity-100 scale-100`}
                        leave={tw`transition ease-in duration-75`}
                        leaveFrom={tw`transform opacity-100 scale-100`}
                        leaveTo={tw`transform opacity-0 scale-95`}
                      >
                        <Menu.Items<
                          typeof Fragment
                        > tw="origin-top-right absolute right-0 mt-2 w-48 rounded-md py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div tw="block mx-4 py-2 text-sm font-medium leading-none text-slate-700 border-b border-slate-200">
                            <div tw="text-base">{user.name}</div>
                            <div tw="text-slate-400 mt-1">{user.email}</div>
                          </div>

                          {userNavigation.map(item => (
                            <Menu.Item<typeof Fragment>
                              key={item.name}
                              as={Fragment}
                            >
                              {({ active }) => (
                                <Link
                                  to={item.href}
                                  css={[
                                    tw`block px-4 py-2 text-sm text-slate-700`,
                                    active ? tw`bg-slate-100` : null,
                                  ]}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                <div tw="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button tw="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:(text-white bg-slate-700) focus:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-white)">
                    <span tw="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon tw="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon tw="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel tw="md:hidden">
              <div tw="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map(item => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    tw="block px-3 py-2 rounded-md text-base font-medium text-white hover:(text-white bg-slate-700)"
                    // aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>

              <div tw="pt-4 pb-3 border-t border-slate-700">
                <div tw="flex items-center px-5">
                  <div tw="flex-shrink-0">
                    <img
                      tw="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>

                  <div tw="ml-3">
                    <div tw="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>

                    <div tw="text-sm font-medium leading-none text-slate-400">
                      {user.email}
                    </div>
                  </div>

                  <ToggleThemeButton
                    theme={theme}
                    setter={toggleTheme}
                    tw="ml-auto flex-shrink-0"
                  />

                  {/* <button
                    type="button"
                    tw="ml-auto bg-slate-800 flex-shrink-0 p-1 rounded-full text-slate-400 hover:text-white focus:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-white)"
                  >
                    <span tw="sr-only">View notifications</span>
                    <BellIcon tw="h-6 w-6" aria-hidden="true" />
                  </button> */}
                </div>

                <div tw="mt-3 px-2 space-y-1">
                  {userNavigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      tw="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:(text-white bg-slate-700)"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </Fragment>
        )}
      </Disclosure>

      {/* Page Header */}
      <header tw="transition bg-base-50 shadow font-montserrat">
        <div tw="sm:container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 tw="text-3xl font-bold text-base-900">Dashboard</h1>
        </div>
      </header>

      {/* Page Content */}
      <main tw="flex-1 sm:container sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>

      {/* <footer tw="flex-shrink-0 h-16 bg-base-800 text-base-100 font-montserrat">
        <div tw="sm:container mx-auto py-4 px-4 sm:px-6 lg:px-8">Footer</div>
      </footer> */}
    </div>
  );
};

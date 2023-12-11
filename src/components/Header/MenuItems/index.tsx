'use client'

import { usePathname } from 'next/navigation'
import { MenuItem, MenuItemProps } from "../MenuItem"
import * as Styled from './index.styled'


export const MenuItems = () => {

    const pathname = usePathname()

    const menuItems: MenuItemProps[] = [

        {
            name: 'Movies',
            href: '/films',
            isActive: pathname == '/films',
        },
        {
            name: 'Top Rated',
            href: '/top-rated',
            isActive: pathname == '/top-rated',
        },
        {
            name: 'Upcoming',
            href: '/upcoming',
            isActive: pathname == '/upcoming',
        }
    ]
    return (
        <Styled.List>
            {menuItems.map(mi => (
                <MenuItem
                    key={mi.name}
                    {...mi}
                />
            ))}
        </Styled.List>
    )
}
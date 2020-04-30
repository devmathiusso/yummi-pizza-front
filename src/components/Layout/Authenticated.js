import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';
import { Popover, Menu, Pane, Avatar, Text } from 'evergreen-ui';
import { Redirect } from 'react-router-dom';

const Authenticated = ({ user, setRedirectTo, logout }) => {
  if (!user.id) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Popover
        position="bottom"
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item icon="history" onSelect={() => setRedirectTo('/orders-history')}>Orders History</Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon="log-out" onSelect={() => logout()}>Logout</Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Pane
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          cursor="pointer"
        >
          <Text size={400}>{user.name}</Text>
          <Avatar name={user.name} size={32} marginLeft={10} />
        </Pane>
      </Popover>
    </>
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated);

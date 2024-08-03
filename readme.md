# discord-js-error-helper

A helper package to provide clearer error messages for discord.js.


## Usage

```javascript
const { validateCommand, MissingPermissionsError, InvalidArgumentTypeError, ChannelNotFoundError, UserNotFoundError, RoleNotFoundError, MessageTooLongError, CommandAlreadyExistsError, InvalidEmojiFormatError } = require('discord-js-error-helper');

try {
  const command = 'createEmbed';
  validateCommand(command);
} catch (error) {
  console.error(error.message);
}

try {
  // Simulate a missing permissions error
  throw new MissingPermissionsError('MANAGE_CHANNELS');
} catch (error) {
  console.error(error.message);
}
```

## Installation

```bash
npm install discord-js-error-helper
```
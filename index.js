class InvalidCommandFormatError extends Error {
    constructor(command) {
      super(`Invalid command format: '${command}'. Slash commands cannot have capital letters and must match the pattern /^[\p{Ll}\p{Lm}\p{Lo}\p{N}\p{sc=Devanagari}\p{sc=Thai}_-]+$/u.`);
      this.name = "InvalidCommandFormatError";
    }
  }
  
  class MissingPermissionsError extends Error {
    constructor(permission) {
      super(`Missing required permission: '${permission}'. Please ensure the bot has the necessary permissions.`);
      this.name = "MissingPermissionsError";
    }
  }
  
  class InvalidArgumentTypeError extends Error {
    constructor(expectedType, receivedType) {
      super(`Invalid argument type: expected '${expectedType}', but received '${receivedType}'.`);
      this.name = "InvalidArgumentTypeError";
    }
  }
  
  class ChannelNotFoundError extends Error {
    constructor(channel) {
      super(`Channel not found: '${channel}'. Please ensure the channel exists and is accessible.`);
      this.name = "ChannelNotFoundError";
    }
  }
  
  class UserNotFoundError extends Error {
    constructor(user) {
      super(`User not found: '${user}'. Please ensure the user exists and is accessible.`);
      this.name = "UserNotFoundError";
    }
  }
  
  class RoleNotFoundError extends Error {
    constructor(role) {
      super(`Role not found: '${role}'. Please ensure the role exists and is accessible.`);
      this.name = "RoleNotFoundError";
    }
  }
  
  class MessageTooLongError extends Error {
    constructor(maxLength) {
      super(`Message too long: The message exceeds the maximum length of ${maxLength} characters.`);
      this.name = "MessageTooLongError";
    }
  }
  
  class CommandAlreadyExistsError extends Error {
    constructor(command) {
      super(`Command already exists: The command '${command}' is already registered.`);
      this.name = "CommandAlreadyExistsError";
    }
  }
  
  class InvalidEmojiFormatError extends Error {
    constructor(emoji) {
      super(`Invalid emoji format: '${emoji}'. Please provide a valid emoji.`);
      this.name = "InvalidEmojiFormatError";
    }
  }
  
  function validateCommand(command) {
    const pattern = /^[\p{Ll}\p{Lm}\p{Lo}\p{N}\p{sc=Devanagari}\p{sc=Thai}_-]+$/u;
    if (!pattern.test(command)) {
      throw new InvalidCommandFormatError(command);
    }
  }
  
  module.exports = {
    InvalidCommandFormatError,
    MissingPermissionsError,
    InvalidArgumentTypeError,
    ChannelNotFoundError,
    UserNotFoundError,
    RoleNotFoundError,
    MessageTooLongError,
    CommandAlreadyExistsError,
    InvalidEmojiFormatError,
    validateCommand,
  };
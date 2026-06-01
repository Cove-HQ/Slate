# Slate
Slate is an external Roblox moderation tool, use it to send requests/run actions within your game without needing to join!

# Set Up:
- Fork this repo and host it on any host of your choice (Render works and is free!)
- Create a .env file and add a "key" variable. Use a secure key that cannot be guessed, this is your API key.
- Create a new script in Server Script Service and copy n' paste roscript.luau into it.
- Create a module script and make that the child of roscript.luau, paste the contents of roconfig.luau into it.
- Ensure all require(...) at the top of both files lead to the right place. You may need to update it in roscript.luau.
- In addition to requires, ensure the link at the top of roscript.luau and roconfig.luau leads to the link where the api is hosted. **Include the / at the end of the link**
- Lastly, please that same API key from step 2 in the key variable within roscript.luau.

Once those steps are done you can start using the API in your tools! If you need any help feel free to reach out to us by emailing covehq.rblx@gmail.com.

Made with <3 in New York.
Moderate with Slate.

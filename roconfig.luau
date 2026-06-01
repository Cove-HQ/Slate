-- this should be a cild of roscript.luau

local actionModule = {}
local plrs = game:GetService("Players")
function actionModule.kick(user,reason)
	game.Players[user]:Kick(reason)
end
function actionModule.ban(user,reason,duration)
	
	local banOps = {
		UserIds = {plrs:GetUserIdFromNameAsync(user)},
		Duration = duration,
		DisplayReason = reason,
		PrivateReason = reason,
		ExcludeAltAccounts = false,
		ApplyToUniverse = true
		
		
	}
	
	local s,r = pcall(function()
		return plrs:BanAsync(banOps)
	end)
	
	if s  then
		return "Slate: Player banned."
	else 
		warn("Slate: Error banning player")
		return "Slate: Error banning player"
	end 
end

function actionModule.warn(user,reason)

	print("Warned "..user.." for ".. reason)
	 
end
return actionModule

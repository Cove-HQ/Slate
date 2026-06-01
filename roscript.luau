local https = game:GetService("HttpService")
local link = "https://slate-wuvl.onrender.com/"
local actionModule = require(script.actions)
local function getAwaiting()
	local success, response = pcall(function()
		return https:GetAsync(link.."processing/get")
	end)

		if success then
			local data = https:JSONDecode(response)
			print(data.list)
			return data.list
		else
			print("Error fetching awaiting list:", response)
		end

end

while task.wait(10) do
	if (#getAwaiting().awaiting>=1) then
		local awaiting = getAwaiting().awaiting
		for i,v in pairs(awaiting) do
			actionModule[v.action](v.username,v.reason,v.duration)
			local payload = {
				action = v.action,
				username = v.username
			}
			local jsonData = https:JSONEncode(payload)
			local success, response = pcall(function()
				return https:PostAsync(link.."actions/process",jsonData,Enum.HttpContentType.ApplicationJson)
			end)

			if success then
			print("Slate: Sucess processing 1 action")
			else
				print("Slate: Error processing 1 action")
			end
		end
	end
end




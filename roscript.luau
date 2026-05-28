local https = game:GetService("HttpService")
local link = "http://localhost:3000/"

local function getAwaiting()
local success, response = pcall(function()
return https:GetAsync(link.."processing/get")
end)

if success then
    local data = https:JSONDecode(response)

end
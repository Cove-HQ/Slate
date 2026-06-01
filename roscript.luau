local https = game:GetService("HttpService")
local link = "http://localhost:3000/"

local function getAwaiting()
local success, response = pcall(function()


if success then
    local data = https:JSONDecode(response)
    print(data.list)

else
    print("Error fetching awaiting list:", response)
end
return https:GetAsync(link.."processing/get")

end)
end

